import { TurnedInNot } from "@mui/icons-material";
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";

export const SideBarItem = ({title, body, id}) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [title]);

    const newBody = useMemo(() => {
        return body.length > 60
            ? body.substring(0,60) + '...'
            : body;
    }, [body]);

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid2>
            </ListItemButton>
        </ListItem>
    );
}

