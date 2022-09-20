import { useRecordContext } from "react-admin";
import {
  useEventLabel,
  EventRecord,
  EventAvatar,
} from "@react-admin/ra-audit-log";
import { ListItem, styled, ListItemText, Typography } from "@mui/material";

export const EventsAndCommentsTimelineItem = () => {
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
          <div className={EventsAndCommentsTimelineItemClasses.authorContainer}>
            <EventAvatar
              className={EventsAndCommentsTimelineItemClasses.avatar}
              alt={record.author.fullName}
              src={record.author.avatar}
              fullName={record.author.fullName}
              role="presentation"
              size="small"
            />
            <Typography
              color="textPrimary"
              className={EventsAndCommentsTimelineItemClasses.content}
            >
              <strong className={EventsAndCommentsTimelineItemClasses.author}>
                {record.author.fullName}
              </strong>
              {record?.action === "comment" ? <>&nbsp;commented</> : null}
            </Typography>
          </div>
        }
        secondary={
          <span className={EventsAndCommentsTimelineItemClasses.action}>
            {actionLabel}
          </span>
        }
      />
    </Root>
  );
};

const PREFIX = "EventsAndCommentsTimelineItem";
export const EventsAndCommentsTimelineItemClasses = {
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
  [`& .${EventsAndCommentsTimelineItemClasses.content}`]: {
    display: "flex",
    flexWrap: "wrap",
  },
  [`& .${EventsAndCommentsTimelineItemClasses.authorContainer}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${EventsAndCommentsTimelineItemClasses.avatar}`]: {
    marginRight: theme.spacing(1),
  },
  [`& .${EventsAndCommentsTimelineItemClasses.author}`]: {},
  [`& .${EventsAndCommentsTimelineItemClasses.action}`]: {},
  [`& .${EventsAndCommentsTimelineItemClasses.date}`]: {},
}));
