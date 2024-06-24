import { 
    AiOutlineLogout, 
    AiOutlineSetting,
    AiOutlineDashboard,
    AiOutlineMail,
    AiOutlineMenu,
    AiOutlineArrowRight,
    AiOutlineCheck,
    AiOutlineHistory
  } from "react-icons/ai"
import { BsDatabase, BsPeople } from "react-icons/bs";
import { MdMeetingRoom, MdOutlineSchedule, MdOutlineSettings, MdSchedule } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
  

export const consultationSidebarLinks = [
    {
      imgURL: '/icons/Home.svg',
      route: '/consultation/home',
      label: 'Home',
    },
  
    {
      imgURL: '/icons/upcoming.svg',
      route: '/consultation/upcoming',
      label: 'Upcoming',
    },
    {
      imgURL: '/icons/previous.svg',
      route: '/consultation/previous',
      label: 'Previous',
    },
    {
      imgURL: '/icons/Video.svg',
      route: '/consultation/recordings',
      label: 'Recordings',
    },
    {
      imgURL: '/icons/add-personal.svg',
      route: '/consultation/personal-room',
      label: 'Personal Room',
    },
];

export const avatarImages = [
  '/images/doc-3.jpg',
  '/images/patient-1.jpg',
  '/images/patient-2.jpg',
  '/images/patient-3.jpg',
]

export const sampleDrugs = [
  {
    name: 'Paracetamol',
    condition: 'Morning',
    precaution: 'After Meal',
    imageSrc: '/assets/images/drug 1.jpg',
    numberOfTalets: 2,
    time: new Date('2024-05-20T08:00')
  },
  {
    name: 'Ibuprofen',
    condition: 'Afternoon',
    precaution: 'Before Meal',
    imageSrc: '/assets/images/drug 1.jpg',
    numberOfTalets: 1,
    time: new Date('2024-05-20T13:00')
  },
  {
    name: 'Vitamin D',
    condition: 'Evening',
    imageSrc: '/assets/images/drug 1.jpg',
    numberOfTalets: 1,
    time: new Date('2024-05-20T19:00')
  }
];

export const events = [
{
    header: 'International Conference On Cell And Tissue Science',
    content: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sit dolore doloremque tempora architecto vitae eos asperiores 
    quaerat odio. Non, consequuntur aliquam! Eaque 
    recusandae aspernatur nihil, sapiente aliquid placeat? 
    Ex, assumenda.
    `,
    primaryButtonText: 'Join',
    primaryButtonColor: '#000',
    secondaryButtonText: 'Remind me later',
    secondaryButtonBorderColor: '#000',
    imageSrc: '/assets/images/doc-2.jpg'
}
]

export const dashboardHistories = [
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  usedAt: 'dashboard',
  summary: 'none'
},
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  usedAt: 'dashboard',
  summary: 'none'
},
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  usedAt: 'dashboard',
  summary: 'none'
}
]

export const historyHeadbar = [
{
  title: 'Virtual Consultation',
  count: 23,
  circleColor: 'bg-red'
},
{
  title: 'Pharrmacy Visits',
  count: 12,
  circleColor: 'bg-blue'
},
{
  title: 'Check-ups',
  count: 6,
  circleColor: 'bg-violet'
},
{
  title: 'In-person Visitations',
  count: 6,
  circleColor: 'bg-yellow'
},
]

export const userHistoryList = [
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'Serwise Hospital',
  complaint: 'Abdominal pains after eating banku and pepper without fish',
  meds: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'consultation'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'Serwise Hospital',
  complaint: 'Abdominal pains after eating banku and pepper without fish',
  meds: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'consultation'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'Serwise Hospital',
  complaint: 'Abdominal pains after eating banku and pepper without fish',
  meds: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'consultation'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
{
  activity: 'Lab Tests',
  date: new Date('2024-06-12T12:30'),
  host: 'Serwise Hospital',
  tests_result: [{Malaria: 'Positive'}, {Typhoid:'Negative'}],
  summary: 'Diagnosed of malaria',
  eventType: 'lab'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
{
  activity: 'In-person Appointment',
  date: new Date('2024-06-12T12:30'),
  host: 'Dr Mensah Oteh',
  review: 'Ulcer diagnosis',
  meds: ['G - 50mg', 'paracetamol 25mg'],
  summary: 'Medications changed based on patients reaction',
  eventType: 'check-up'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
{
  activity: 'Check up',
  date: new Date('2024-06-12T12:30'),
  host: 'Serwise Hospital',
  complaint: 'Abdominal pains after eating banku and pepper without fish',
  meds: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'consultation'
},
{
  activity: 'Visit To K-Pharma Drug Store',
  date: new Date('2024-06-12T12:30'),
  host: 'MC Pharma',
  paymentMethod: 'Mobile Money',
  orders: ['G - 50mg', 'paracetamol 25mg'],
  eventType: 'purchase'
},
]


export const dashboardNavElements = [
{label: 'Home', link: '/patient/dashboard'},
{label: 'Blogs', link: '/blogs'},
]

export const hospitalNavElements = [
{label: 'Overview', link: '/patient/hospital'},
{label: 'Appointments', link: '/patient/hospital/appointments'},
{label: 'Consultation', link: '/patient/hospital/consultation'},
]

export const pharmacyNavElements = [
{label: 'Shop', link: `/patient/pharmacy/shop`},
{label: 'Cart', link: '/patient/pharmacy/shop/cart'},
{label: 'Orders', link: '/patient/pharmacy/shop/orders'},

]

export const settingsNavElements = [
{label: 'Account', link: `/patient/settings`},
{label: 'History', link: '/patient/settings/history'},
{label: 'Support', link: '/patient/settings/support'},

]

export const landing = {
  header: {
      logo: '/logo.svg',
      navLinks: [
          {
              label: `Home`,
              link: `#home`
          },
          {
              label: `About Us`,
              link: `#about`
          },
          {
              label: `Why Us`,
              link: `#why-us`
          },
          {
              label: `Reactions`,
              link: `#reactions`
          },
          {
              label: `Blogs`,
              link: `#blogs`
          },
      ],
      login: {
          text: `Log in`,
          link: `/sign-in`
      },
      button: {
          text: `Sign up`,
          link: `/sign-up`
      },
      menuIcon: AiOutlineMenu
  },
  hero: {
      bg: "/images/herobg.jpg",
      subtitle: 'Prioritizing Your Comfort & Convenience.',
      title: 'personalized healthcare Designed Just For You.',
      body: `Connecting you with real-time, licensed 
      physicians from hospitals worldwide while 
      ensuring a consistent and accurate health 
      record throughout your lifetime`,
      cards: [
          {
            color: 'white', 
            title: `Get Access Anytime`, 
            icon: '/icons/24-7.png', 
            text: `Online Access To doctors Around The World`
          },
          {
            color: 'white', 
            title: `Buy All Your Drugs`, 
            icon: '/icons/mdi_drugs.png', 
            text: `Order drugs online from pharmacies.`
          },
          {
            color: 'white', 
            title: `Meet Your Doctors`, 
            icon: '/icons/uil_schedule.png', 
            text: `Book appointments for in-person visits to hospitals`
          },
          {
            color: 'green', 
            title: `THE EHR POLICY`, 
            icon: '/icons/bx_data.png', 
            text: `You are the sole manager of your health record on v-healthcare.`
          },
      ]
  },
  about: {
      subtitle: `Increasing Access to healthcare services.`,
      title: `Improving the Quality of healthcare 
      delivery More Flexibility`,
      header: `The proposed virtual healthcare service 
      provision system addresses pressing 
      healthcare challenges while capitalizing on 
      opportunities for efficiency, accessibility, and 
      patient-centered care.`,
      body: `The proposed virtual healthcare service provision 
      system addresses pressing healthcare challenges 
      while capitalizing on opportunities for efficiency, 
      accessibility, and patient centered care. It has the 
      potential to transform the healthcare landscape and 
      improve healthcare outcomes for patients and 
      providers alike.`,
      imageSrc: '/images/aboutpic.jpg',
      founding: {
          title: `Founded`,
          year: `2024`,
          text: `Increased the reach of healthcare needs by 45%`
      },
      button: {
          icon: AiOutlineArrowRight,
          text: `Learn more`
      }
  },
  awareness: {
      subtitle: `Motivation For Starting This Project.`,
      title: `Addressing inherent limitations in the current healthcare landscape.`,
      body: `We believe by harnessing the power of technology, we 
      can drastically change the healthcare delivery 
      landscape by mitigating the challenges associated with 
      accessibility, affordability, quality of care, and low 
      service patronage offered by healthcare providers.`,
      buttons: [
          {
              text: 'Register',
              style: 'bg-green-2 w-[100px] mr-3 h-[35px] hover:opacity-90 text-white p-1 font-medium rounded-md',
              
          },
          {
              text: 'Watch Demo',
              style: 'border border-green-4 hover:border-green-2 hover:text-green-2 w-[110px] h-[35px] p-1 text-green-4 rounded-md',
          }
      ],
      cards: [
          {
              image: '/images/about-card-1.jpg', 
              title: `Continuity of care`, 
              description: `With our comprehensive patient health record system, physicians ca­n give the right medical treatment to patients minimizing the risk of complications which may arise from uncomplete health history`,  
              buttonText: `Read more`
          },
          {
              image: '/images/about-card-2.jpg', 
              title: `Scalability and reach`, 
              description: `Our platform enables healthcare facilities break 
              boundaries associated with traditional 
              healthcare facilities as they are able to reach and 
              cater a broader patient demographic.`,  
              buttonText: `Read more`
          },
          {
              image: '/images/about-card-3.jpg', 
              title: `Cost effectiveness`, 
              description: `Adopting a virtual mode of healthcare delivery 
              means theres a reduced need for physical 
              visitations which in turn lowers the costs 
              associated with transportation and time 
              expenses for patients`,  
              buttonText: `Read more`
          },
      ]
  },
  whyUs: {
      image: '/images/why-us.jpg',
      title: `Our Enlisted Healthcare Providers Make Your 
      Healthcare Needs Their Responsibility`,
      body: `
      In this era of digital advancement, would it not be more convenient to have your
      healthcare needs catered for by trusted professionals from renowned healthcare facilities, regardless of your location?
      `,
      list: {
          icon: AiOutlineCheck, 
          texts: [
              `Patient-centric healthcare`,
              `Consultation Anywhere, anytime`,
              `check-ups on health conditions`,
              `consistent medication throughout`,
              `less need for in-person visits`
          ]
      },
      buttonText: `Check Listed Hospitals`
  },
  insurance: {
      title: `Insurance Plans`,
      content: `We provide various insurance policy plans to fit and 
      cater for a wide range of consumers. Browse our 
      Insurance plans and choose the one that best fit your 
      healthcare needs.`,
      cards: [
          {
              title: `Family Care`,
              description: `Covers up to 5 people. Suitable for nuclear families.`,
              price: `2999`,
              priceSuperscript: '99',
              isDominant: false,
              listTexts: [
                  `Up to 5 people`,
                  `Personal family physician`,
                  `24/7 access to consultations`,
                  `Renewed every 12 months`
              ],
              buttonText: `Get Started`,
              buttonStyle: ' hover:bg-green-2 hover:border-0 hover:text-white hover:font-medium border border-green-4',

          },
          {
              title: `Business/Workers Care`,
              description: `For firms or companies looking for a health 
              insurance plan for their employees and their families.`,
              price: `Let's Talk`,
              isDominant: true,
              listTexts: [
                  `Unlimited`,
                  `Includes 1+2 policy per employee`,
                  `24/7 access to consultations`,
                  `Renewed every 12 months`
              ],
              buttonText: `Book A Call `,
              buttonStyle: 'bg-white  hover:opacity-90 text-green-2 font-medium',

          },
          {
              title: `Personal Care`,
              description: `Cover your health care needs with our 
              personal care insurance plan.`,
              price: `2999`,
              isDominant: false,
              priceSuperscript: '99',
              listTexts: [
                  `Only 1 person`,
                  `No extra charge`,
                  `24/7 access to consultations`,
                  `Renewed every 12 months`
              ],
              buttonText: `Get Started`,
              buttonStyle: ' hover:bg-green-2 hover:border-0 hover:text-white hover:font-medium border border-green-4',

          },
      ]
  },
  stories: {
      bg: "/images/laptopGirlSmiling.jpg",
      title: `Inspiring Stories`,
      posts: [
          {
              image: "/images/laptopGirlSmiling.jpg",
              author: `Samuel Koe`,
              role: `Registered Patient`,
              texts: `Through V-Healthcare, I have been able to meet 
              specialized doctors overseas who are well informed 
              about my health condition and have provided 
              immense support to me without travelling outside 
              of my country (outside of my home even.)`,
          },
          {
              image: "/images/meet-up.jpg",
              author: `Daniella Samsui`,
              role: `Registered Patient`,
              texts: `Because of V-Healthcare, I was able to respond 
              fast to a seizure my daughter had one dawn. Living 
              on the outskirts of New York City and a 1 hour drive 
              to the nearest hospital/clinic, it would have been a 
              night of sorrow for me and my family as we could 
              have lost the life of our beloved.`,
          },
      ],
      button: {
          icon: ``,
          text: `Read more`
      }
  },
  faqs: {
      title: `Frequently Asked Questions (FAQs)`,
      inquiries: [
          {
              question: `What can I not use V-Healthcare for?`,
              response: `None`
          },
          {
              question: `How often can I receive consultation in a year?`,
              response: `Yes`
          },
          {
              question: `Are the listed hospitals all legally established?`,
              response: `sure`
          },
          {
              question: `What can I not use V-Healthcare for?`,
              response: `haha`
          },
          {
              question: `Explain the insurance policies to me`,
              response: `oh heck no`
          },
      ]
  },
  blogs: {
      title: `Recent blogs`,
      content: `Latest health trends you should know`,
      cards: [
          {
              image: "/images/telemed.jpeg", 
              title: `Benefits of eating apples in the morning.`, 
              description: `With our comprehensive patient health record 
              system, physicians ca­n give the right medical 
              treatment to patients minimizing the risk of 
              complications which may arise from uncomplete 
              health history.`,  
              buttonText: `Read more`,
              date: `12 Aug 2024`,
              author: `Dr Yamal Ceto`
          },
          {
              image: "/images/meet-up.jpg", 
              title: `Benefits of eating apples in the morning.`,  
              description: `With our comprehensive patient health record 
              system, physicians ca­n give the right medical 
              treatment to patients minimizing the risk of 
              complications which may arise from uncomplete 
              health history.`,  
              buttonText: `Read more`,
              date: `12 Aug 2024`,
              author: `Dr Yamal Ceto`
          },
          {
              image: "/images/aboutpic.jpg", 
              title: `Benefits of eating apples in the morning.`, 
              description: `With our comprehensive patient health record 
              system, physicians ca­n give the right medical 
              treatment to patients minimizing the risk of 
              complications which may arise from uncomplete 
              health history.`,  
              buttonText: `Read more`,
              date: `12 Aug 2024`,
              author: `Dr Yamal Ceto`
          },
      ]
  },
  footer: {
      logo: "/logo.svg",
      content: `The proposed virtual healthcare service provision system 
      addresses pressing healthcare challenges while 
      capitalizing on opportunities for efficiency, accessibility, 
      and patient centered care. It has the potential to 
      transform the healthcare landscape and improve 
      healthcare outcomes for patients and providers alike.`,
      socials: [
          {
              icon: "/icons/ig.png",
              link: ``
          },
          {
              icon: "/icons/linkedIn.png",
              link: ``
          },
          {
              icon: "/icons/linkedIn.png",
              link: ``
          },
      ],
      company: {
          title: `Company`,
          lists: [
              {
                  label: `About`,
                  link: ``,
                  icon: ``
              },
              {
                  label: `Our Team`,
                  link: ``,
                  icon: ``
              },
              {
                  label: `Join Us`,
                  link: ``,
                  icon: ``
              },
              {
                  label: `Contact Us`,
                  link: ``,
                  icon: ``
              },
          ]
      },
      legal: {
          title: `Legal`,
          lists: [
              {
                  label: `Privacy Policy`,
                  link: ``,
                  icon: ``
              },
              {
                  label: `EHR Policy`,
                  link: ``,
                  icon: ``
              },
              {
                  label: `Security`,
                  link: ``,
                  icon: ``
              },
          ]
      },
      copyright: `Copyright @ 2024 ! All rights reserved`
  }
}

export const patientSidebarElements = {
    top: [
        {
            route: '/patient/dashboard',
            label: 'Dashboard',
            icon: RxDashboard
        },
        {
            route: '/consultation/home',
            label: 'Consultation',
            icon: MdMeetingRoom
        },
        {
            route: '/appointments/',
            label: 'Schedule',
            icon: MdOutlineSchedule
        },
        {
            route: '/patient/record',
            label: 'Record',
            icon: BsDatabase
        },
    ],
}

export const pharmacySidebarElements = {
    top: [
        {
            route: '/patient/dashboard',
            label: 'Dashboard',
            icon: RxDashboard
        },
        {
            route: '/consultation/home',
            label: 'Consultation',
            icon: MdMeetingRoom
        },
        {
            route: '/appointments/',
            label: 'Schedule',
            icon: MdOutlineSchedule
        },
        {
            route: '/patient/record',
            label: 'Record',
            icon: BsDatabase
        },
    ],
}

export const hospitalSidebarElements = {
    top: [
        {
            route: '/patient/dashboard',
            label: 'Dashboard',
            icon: RxDashboard
        },
        {
            route: '/consultation/home',
            label: 'Consultation',
            icon: MdMeetingRoom
        },
        {
            route: '/appointments/',
            label: 'Schedule',
            icon: MdOutlineSchedule
        },
        {
            route: '/patient/record',
            label: 'Record',
            icon: BsDatabase
        },
    ],
}

export const doctorSidebarElements = {
    top: [
        {
            route: '/user/dashboard',
            label: 'Dashboard',
            icon: RxDashboard
        },
        {
            route: '/consultation/home',
            label: 'Consultation',
            icon: MdMeetingRoom
        },
        {
            route: '/affiliation/clients',
            label: 'Clients',
            icon: BsPeople
        }
    ],
}

export const SidebarBbottomNavs = [
    {
        route: '/patient/history',
        label: 'History',
        icon: AiOutlineHistory
    },
    {
        route: '/patient/settings',
        label: 'Settings',
        icon: MdOutlineSettings
    },
]