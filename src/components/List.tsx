import { Divider, ListItem } from "@mui/material";
import List from "@mui/material/List";
import Container from "@mui/material/Container";

interface ListItem {
    title: React.ReactNode;
    description: React.ReactNode;
}

export default function CustomList({ list }: { list: Array<ListItem> }) {
    return (
        <List>
            {list.map((item, index) => (
                <ListItem key={index}>
                    <Container>
                        {item.title}
                        {item.description}
                        {index != list.length - 1 ? <Divider /> : <></>}
                    </Container>
                </ListItem>
            ))}
        </List>
    );
}
