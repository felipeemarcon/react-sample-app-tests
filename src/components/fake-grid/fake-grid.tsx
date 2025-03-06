import { ContainerVariant } from "../../types";
import Container from "../container/container";
import Grid from "../grid/grid";

export default function FakeGrid({ variant }: { variant: ContainerVariant }) {
  return (
    <div className="w-full h-full absolute z-30 top-0 left-0 pointer-events-none">
      <Container padding="horizontal" variant={variant} className="h-full">
        <Grid className="w-full top-0 left-0 min-h-full relative">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="col-span-1 row-span-full row-start-1 bg-blue-500/10 min-h-dvh border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10" />
          ))}
        </Grid>
      </Container>
    </div>
  )
}
