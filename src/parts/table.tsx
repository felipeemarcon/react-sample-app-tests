import { Avatar, Checkbox, IconButton, Table, TableBody, TableCell, TableCol, TableHead, TableRow, Tag, TagProps } from "@stone-payments/jade";

export default function SampleTable() {
  const createData = (l: number, startsIn: number) =>
    Array.from({ length: l }).map((_, index) => {
      const i = index + startsIn + 1;
      return {
        id: i,
        name: `Name ${i}`,
        email: `user.${i}@${i % 3 === 0 ? 'stone.com.br' : i % 2 === 0 ? 'pagar.me' : 'ton.com.br'}`,
        money: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl' }).format(
          (i + 1) * 100
        ),
        company: i % 3 === 0 ? 'Stone' : i % 2 === 0 ? 'Pagarme' : 'Ton',
      };
    });

  const getRandomTag = (): TagProps['variant'] => {
    const tags: Pick<TagProps, 'variant'>[] = [
      { variant: 'info' },
      { variant: 'positive' },
      { variant: 'warning' },
      { variant: 'negative' },
      { variant: 'brand' }
    ];

    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex].variant;
  }

  return (
    <Table>
      <TableHead>
        <TableCol size="small" align="center" id="check">
          <Checkbox name="check-all" />
        </TableCol>
        <TableCol id="id">ID</TableCol>
        <TableCol id="id">Avatar</TableCol>
        <TableCol id="name">Nome</TableCol>
        <TableCol id="email">Email</TableCol>
        <TableCol id="money">Valor</TableCol>
        <TableCol id="id">Tag</TableCol>
        <TableCol id="company">Empresa</TableCol>
        <TableCol id="company" align="right">
          Ações
        </TableCol>
      </TableHead>
      <TableBody>
        {createData(10, 0).map(item => (
          <TableRow key={item.id}>
            <TableCell size="small">
              <Checkbox name={item.id.toString()} />
            </TableCell>
            <TableCell>{item.id}</TableCell>
            <TableCell>
              <Avatar size="xsmall" label="JD" />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.money}</TableCell>
            <TableCell>
              <Tag size="small" variant={getRandomTag()}>
                Tag label
              </Tag>
            </TableCell>
            <TableCell>{item.company}</TableCell>
            <TableCell align="right">
              <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                <IconButton
                  size="medium"
                  variant="neutral-ghost"
                  icon="action-download"
                  onClick={e => {
                    e.stopPropagation();
                    console.log('Action 1');
                  }}
                />
                <IconButton
                  size="medium"
                  variant="neutral-ghost"
                  icon="menu-more-horizontal"
                  onClick={e => {
                    e.stopPropagation();
                    console.log('Action 2');
                  }}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
