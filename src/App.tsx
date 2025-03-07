import { CardContainer, GroupHeader, ListItem, Text } from '@stone-payments/jade';
import { useState } from 'react';
import Container from './components/container/container';
import Grid from './components/grid/grid';
import Header from './components/header/header';
import LayoutControls from './components/layout-controls/layout-controls';
import Sidebar from './components/sidebar/sidebar';
import SampleTable from './parts/table';
import { ContainerVariant } from './types';

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [containerVariant, setContainerVariant] = useState<ContainerVariant>('default');

  return (
    <div
      className={`jade stone flex flex-col content-start md:flex-row ${isSidebarVisible ? 'md:pl-[80px] lg:pl-0' : ''}`}
    >
      <Sidebar visibility={isSidebarVisible} />
      <div
        className={`relative ml-0 flex w-full flex-col ${isSidebarVisible ? 'lg:ml-(--app-sidebar-width-lg)' : ''} transition-all duration-500 ease-in-out`}
      >
        <Header containerVariant={containerVariant} />
        <Container
          variant={containerVariant}
          className={`@container lg:pb-24`}
          data-name="main-content"
        >
          <Grid className="items-start">
            <div className="col-span-full">
              <CardContainer variant="outlined">
                <SampleTable />
              </CardContainer>
            </div>
            <main className="col-span-full flex flex-col items-start gap-4 lg:col-span-5 lg:gap-5 xl:col-span-8 @lg:@max-xl:col-span-full @lg:@max-xl:flex-row @8xl:col-span-12">
              <CardContainer className="w-full" data-name="details">
                <GroupHeader title="Detalhes" />
                {Array.from({ length: 5 }).map((_, index) => (
                  <ListItem
                    key={index}
                    content={<Text color="medium">Label</Text>}
                    trailing={<Text weight="semibold">Value</Text>}
                  />
                ))}
              </CardContainer>
              <CardContainer className="w-full" data-name="other-infos">
                <GroupHeader title="Outras infos" />
                {Array.from({ length: 5 }).map((_, index) => (
                  <ListItem
                    key={index}
                    content={<Text color="medium">Label</Text>}
                    trailing={<Text weight="semibold">Value</Text>}
                  />
                ))}
              </CardContainer>
            </main>
            <CardContainer
              as="aside"
              className="col-span-full lg:col-span-3 xl:col-span-4 @lg:@max-xl:col-span-full"
              data-name="sidebar"
            >
              <GroupHeader title="Sidebar" />
              <div className="py-1">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ListItem
                    key={index}
                    content={<ListItem.Content label="Label" description="Description" />}
                    onClick={() => console.log(index)}
                  />
                ))}
              </div>
            </CardContainer>
          </Grid>
        </Container>

        <LayoutControls
          containerVariant={containerVariant}
          sidebarVisiblity={isSidebarVisible}
          onContainerChange={setContainerVariant}
          onSidebarVisibilityChange={setIsSidebarVisible}
        />
      </div>
    </div>
  );
}
