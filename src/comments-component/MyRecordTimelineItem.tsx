import { useRecordContext } from "react-admin";
import {
  useEventLabel,
  EventRecord,
  EventAvatar,
} from "@react-admin/ra-audit-log";
import { ListItem, styled, ListItemText, Typography } from "@mui/material";

export const MyRecordTimelineItem = () => {
  const record = useRecordContext<EventRecord>();
  let actionLabel = useEventLabel({ record, variant: "record" });
  if (record?.action === "comment") {
    actionLabel = record.payload.body;
  }

  if (!record) {
    return null;
  }

  return (
    <Root button={false} dense disableGutters>
      <ListItemText
        primary={
          <div className={MyRecordTimelineItemClasses.authorContainer}>
            <EventAvatar
              className={MyRecordTimelineItemClasses.avatar}
              alt={record.author.fullName}
              src={record.author.avatar}
              fullName={record.author.fullName}
              role="presentation"
              size="small"
            />
            <Typography
              color="textPrimary"
              className={MyRecordTimelineItemClasses.content}
            >
              <strong className={MyRecordTimelineItemClasses.author}>
                {record.author.fullName}
              </strong>
              {record?.action === "comment" ? <>&nbsp;commented</> : null}
            </Typography>
          </div>
        }
        secondary={
          <span className={MyRecordTimelineItemClasses.action}>
            {actionLabel}
          </span>
        }
      />
    </Root>
  );
};

const PREFIX = "MyRaRecordTimelineItem";
export const MyRecordTimelineItemClasses = {
  content: `${PREFIX}-content`,
  authorContainer: `${PREFIX}-authorContainer`,
  avatar: `${PREFIX}-avatar`,
  author: `${PREFIX}-author`,
  action: `${PREFIX}-action`,
  date: `${PREFIX}-date`,
};

const Root = styled(ListItem, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${MyRecordTimelineItemClasses.content}`]: {
    display: "flex",
    flexWrap: "wrap",
  },
  [`& .${MyRecordTimelineItemClasses.authorContainer}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${MyRecordTimelineItemClasses.avatar}`]: {
    marginRight: theme.spacing(1),
  },
  [`& .${MyRecordTimelineItemClasses.author}`]: {},
  [`& .${MyRecordTimelineItemClasses.action}`]: {},
  [`& .${MyRecordTimelineItemClasses.date}`]: {},
}));
