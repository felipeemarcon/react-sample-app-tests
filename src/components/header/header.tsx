import { Button, IconButton, Text } from "@stone-payments/jade";
import { ContainerVariant } from "../../types";
import Container from "../container/container";

export default function Header({ containerVariant }: { containerVariant: ContainerVariant }) {
  return (
    <header className="w-full h-[64px] sticky top-0 z-10 bg-white border-b border-slate-200 flex flex-col items-center justify-center">
      <Container variant={containerVariant} padding="horizontal">
        <div className="flex items-center gap-3 transition-width duration-500 ease-in-out">
          <IconButton icon="arrow-left" variant="neutral-ghost" />
          <Text className="basis-full truncate" variant="heading-small">Navigation Bar</Text>
          <div className="flex gap-2 items-center">
            <Button variant="neutral-subtle" size="medium">Action</Button>
            <IconButton variant="neutral-subtle" size="medium" icon="menu-more-horizontal" />
          </div>
        </div>
      </Container>
    </header>
  )
}
