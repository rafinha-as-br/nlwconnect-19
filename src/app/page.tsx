import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import { Input } from "@/components/input";


export default function Home() {
  return (
    <main>
      <Button type="submit"> 
        enviar
        <ArrowRight /> 
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

      <Input type="email" placeholder="Digite seu e-mail" ></Input>
      <Input type="email" placeholder="Digite seu e-mail" error ></Input>
    </main>
  );
}
