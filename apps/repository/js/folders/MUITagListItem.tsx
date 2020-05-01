import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import React from "react";
import {FACheckSquare} from "../../../../web/spectron0/material-ui/IconsDemo";
import {MUIEfficientCheckbox} from "./MUIEfficientCheckbox";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        checkbox: {
            color: theme.palette.text.secondary,
        },
        label: {
            paddingLeft: '5px',
            flexGrow: 1,
        },
        info: {
            color: theme.palette.text.hint,
        },
        row: {
            // color: theme.palette.text.primary,
            userSelect: 'none',
            fontSize: '1.1em',
            display: "flex",
            alignItems: "center",
            padding: '5px',
            paddingTop: '7px',
            paddingBottom: '7px',
            cursor: 'pointer',

            // background: "#f1f1f1",
            '&:hover': {
                background: theme.palette.action.hover
            },
        }
    }),
);

interface IProps {
    readonly selected: boolean;
    readonly nodeId: string;
    readonly label: string;
    readonly info: string | number;
}

export const MUITagListItem = React.memo((props: IProps) => {

    const classes = useStyles();

    // FIXME: the checkbox is painfully slow... a basic <input type=checkbox is
    // way faster... maybe try a fontawesome icon

    // FIXME: change row background color when active

    return (
        // <ListItem role={undefined}
        //           dense
        //           button>
        //     <ListItemIcon>
        //         <Checkbox
        //             edge="start"
        //             checked={props.selected}
        //             tabIndex={-1}
        //             disableRipple
        //
        //         />
        //     </ListItemIcon>
        //     <ListItemText id={props.nodeId}
        //                   primary={props.label} />
        //     {/*<ListItemSecondaryAction>*/}
        //
        //     {/*    {props.info}*/}
        //
        //     {/*</ListItemSecondaryAction>*/}
        // </ListItem>

        <div className={classes.row}>

            {/*<Checkbox size="small"/>*/}

            {/*<input type="checkbox"/>*/}

            {/*<FACheckSquare style={{*/}
            {/*    fontSize: '1.0em',*/}
            {/*    margin: '2px'*/}
            {/*}}/>*/}

            <MUIEfficientCheckbox checked={props.selected}
                                  className={classes.checkbox}/>

            <div className={classes.label}>
                {props.label}
            </div>

            <div className={classes.info}>
                {props.info}
            </div>

        </div>
    )

});
