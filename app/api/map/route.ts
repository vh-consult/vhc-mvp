import { handleError } from "@/lib/utils";
import { OpenAI } from "openai"

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function POST(req: any, res:any) {
    try {
        const gpt4Completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
                {
                    role: 'system', 
                    content: `You only return in JSON a 
                    coordinate key with a value in this 
                    format [43, 6426, -79.3871], then a 
                    little of the location with a title key`
                },
                {
                    role: 'user', content: req.body.value
                }
            ]
        })

        const responseText =gpt4Completion.choices[0]?.message?.content;
        if (responseText && responseText[0]==="{") {
            const json = JSON.parse(responseText)

            res.status(200).json(json)

            console.log(json)
        } else {
            res.status(200).json({
                tryAgain: true
            })
        }
    } catch (error) {
        handleError(error)
    }
}
