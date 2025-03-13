import { Button, IconButton, Text } from '@stone-payments/jade';
import { ContainerVariant } from '../../types';
import Container from '../container/container';

export default function Header({ containerVariant }: { containerVariant: ContainerVariant }) {
  return (
    <header className="sticky top-0 z-10 flex h-[64px] w-full flex-col items-center justify-center border-b border-slate-200 bg-white">
      <Container variant={containerVariant} padding="horizontal">
        <div className="transition-width flex items-center gap-3 duration-500 ease-in-out">
          <IconButton icon="arrow-left" variant="neutral-ghost" />
          <Text className="basis-full truncate" variant="heading-small">
            Navigation Bar
          </Text>
          <div className="flex items-center gap-2">
            <Button icon="action-drag-and-drop" variant="neutral-subtle" size="medium">
              Action
            </Button>
            <IconButton variant="neutral-subtle" size="medium" icon="menu-more-horizontal" />
          </div>
        </div>
      </Container>
    </header>
  );
}
