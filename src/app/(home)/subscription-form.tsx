'use client'

import { Button } from "@/components/button"
import { InputRoot, InputIcon, InputField } from "@/components/input"
import { User, Mail, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
})

export function SubscriptionForm(){
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(subscriptionSchema)
  })

  function onSubscribe(data:any){
    console.log(data)
  }

    return(
        <form className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField onSubmit={handleSubmit(onSubscribe)} type="text" placeholder="Nome completo" {...register('name')}/>
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="text" placeholder="E-mail" {...register('email')} />
              </InputRoot>
            </div>

            <Button type="submit">
              Confirmar
              <ArrowRight className="size-6" />
            </Button>
          </form>
    )
}