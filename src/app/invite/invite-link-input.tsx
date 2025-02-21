'use client'

import { IconButton } from "@/components/iconButton";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkIniputProps {
    inviteLink: string
}

export function InviteLinkIniput({inviteLink}:InviteLinkIniputProps){
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)
    }


    return(
        <InputRoot>
                        <InputIcon>
                        <Link className='size-5'></Link>
                        </InputIcon>

                        <InputField readOnly defaultValue={inviteLink}></InputField>

                        <IconButton className='-mr-2' onClick={copyInviteLink}>
                            <Copy className='size-5'></Copy>
                        </IconButton>
                    </InputRoot>
    )
}