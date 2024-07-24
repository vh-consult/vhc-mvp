"use client"
import React, {useState, useEffect} from 'react'
import { BsDot } from 'react-icons/bs'
import AboutComponent from './AboutComponent'
import ServicesComponent from './ServicesComponent'
import { CompanyParams } from '@/lib/database/models/company.model'
import PostsComponent from './PostsComponent'
import Image from 'next/image'
import { fetchCompanyData } from '@/lib/actions/company.actions'
import ClientsComponent from './ClientsComponent'
import DeliveryService from './DeliveryService'
import InventoryComponent from './InventoryComponent'
import OrdersComponent from './OrdersComponent'

const CompanyProfile = ({companyId}:{companyId: string}) => {
    const [companyData, setCompanyData] = useState<CompanyParams>()
    const [active, setActive] = useState<{label: string, componentToRender: React.JSX.Element} | null>(null);

    type NavItem = {
        label: string;
        componentToRender: React.JSX.Element;
    };

    const navsForRendering: { [key: string]: NavItem[] } = {
        Hospital: [
            {
                label: 'About',
                componentToRender: <AboutComponent companyDescription={companyData?.description!}/>
            },
            {
                label: 'Services',
                componentToRender: <ServicesComponent/>
            },
            {
                label: 'Posts',
                componentToRender: <PostsComponent/>
            },
            {
                label: 'Administrators',
                componentToRender: <ClientsComponent/>
            },
        ],
        Pharmacy: [
            {
                label: 'About',
                componentToRender: <AboutComponent companyDescription={companyData?.description!}/>
            },
            {
                label: 'Inventory',
                componentToRender: <InventoryComponent companyId={companyId}/>
            },
            {
                label: 'Orders',
                componentToRender: <OrdersComponent/>
            },
            {
                label: 'Delivery Services',
                componentToRender: <DeliveryService/>
            },
        ]
    };

    useEffect(() => {
        const request = async () => {
            const company = await fetchCompanyData(companyId)
            setCompanyData(company)
            
            const companyType = company?.companyType as "Hospital" | "Pharmacy";
            if (companyType && navsForRendering[companyType]?.length > 0) {
                setActive(navsForRendering[companyType][0]);
            }
        }
        request()
    }, [companyId])

    return (
        <section className='w-full h-full flex flex-col flex-between p-4'>
            <div className="w-full h-[25%] bg-white relative px-8 py-3">
                <div className="w-full h-1/2 bg-gray-100 absolute top-0 left-0 z-0"></div>
                <div className="w-full flex ">
                    <Image 
                        alt=''
                        src={companyData?.logo!}
                        width={100}
                        height={100}
                        className='w-[80px] h-[80px] z-[10]'
                    />
                    <div className="z-[1000000] ml-4 mt-4">
                        <h2 className="text-2xl font-medium">
                            {companyData?.name!}
                        </h2>
                        <p className="text-base">
                            {companyData?.tagline}
                        </p>
                        <p className="text-sm opacity-75 flex">
                            {companyData?.companyType!} <BsDot/> {companyData?.location!} 
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex flex-between mt-3">
                    {
                        companyData?.companyType && navsForRendering[companyData.companyType]?.map((component, index) => (
                            <span
                                key={index}
                                onClick={() => setActive(component)}
                                className={`
                                    ${active?.label === component.label ? 'text-blue-1' : ''}
                                    hover:cursor-pointer`
                                }>
                                {component.label}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-[73%] bg-white px-8 py-4">
                {
                    companyData?.companyType && navsForRendering[companyData.companyType]?.map((component, index) => (
                        <div className="" key={index}>
                            {active?.label === component.label ? component.componentToRender : null}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CompanyProfile
