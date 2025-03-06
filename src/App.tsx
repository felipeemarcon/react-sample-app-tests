import { ActionButton, CardContainer, DropdownMenu, DropdownMenuItem, DropdownSelection, GroupHeader, IconButton, ListItem, Select, Switch, Text } from "@stone-payments/jade"
import { useState } from "react"
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import { ContainerVariant } from "./types"
import Grid from "./components/grid/grid"
import Container from "./components/container/container"
import LayoutControls from "./components/layout-controls/layout-controls"
import SampleTable from "./parts/table"
import FakeGrid from "./components/fake-grid/fake-grid"

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true)
  const [isGridVisible, toggleGridVisibility] = useState<boolean>(false)
  const [containerVariant, setContainerVariant] = useState<ContainerVariant>('default')

  return (
    <div className={`jade stone flex flex-col md:flex-row content-start ${isSidebarVisible && 'md:pl-[80px] lg:pl-0'}`}>
      <Sidebar visibility={isSidebarVisible} />
      <div className="flex flex-col w-full relative">

        {isGridVisible && <FakeGrid variant={containerVariant} />}

        <Header containerVariant={containerVariant} />
        <Container variant={containerVariant}>
          <Grid>
            <div className="col-span-full">
              <SampleTable />
            </div>
            <main className="col-span-full lg:col-span-6 xl:col-span-8 flex flex-col gap-4 lg:gap-5 items-start">
              <CardContainer className="w-full">
                <GroupHeader title="Detalhes" />
                {Array.from({ length: 5 }).map((_, index) =>
                  <ListItem key={index} content={<Text color="medium">Label</Text>} trailing={<Text weight="semibold">Value</Text>} />
                )}
              </CardContainer>
              <CardContainer className="w-full">
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
            <CardContainer as="aside" className="col-span-full lg:col-span-4 xl:col-span-4">
              <GroupHeader title="Sidebar" />
              <div className="py-1">
                {Array.from({ length: 10 }).map((_, index) =>
                  <ListItem
                    key={index}
                    content={<ListItem.Content label="Label" description="Description" />}
                    onClick={() => console.log(index)}
                  />
                )}
              </div>
            </CardContainer>
          </Grid>
        </Container>

        <LayoutControls
          containerVariant={containerVariant}
          sidebarVisiblity={isSidebarVisible}
          gridVisiblity={isGridVisible}
          onContainerChange={setContainerVariant}
          onSidebarVisibilityChange={setIsSidebarVisible}
          onGridVisibilityChange={toggleGridVisibility}
        />
      </div >
    </div >
  )
}
