import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";


export default function Home() {
  return (
    <main>
      <Button> 
        enviar
        <ArrowRight /> 
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>
    </main>
  );
}
