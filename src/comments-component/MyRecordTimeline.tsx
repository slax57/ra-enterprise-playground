import {
  Timeline,
  TimelineGroup,
  TimelineProps,
  useRecordEvents,
  UseRecordEventsOptions,
} from "@react-admin/ra-audit-log";
import { Box, Card, Typography } from "@mui/material";
import { MyRecordTimelineItem } from "./MyRecordTimelineItem";

export const MyRecordTimeline = (props: MyRecordTimelineProps) => {
  const { data, isLoading } = useRecordEvents(props);

  const { page, perPage, sort, order, record, resource, skeleton, ...rest } =
    props;

  return (
    <Box sx={{ ml: 2, minWidth: 300 }}>
      <Card sx={{ p: 2 }}>
        {!isLoading && !data?.length ? (
          <Typography>There are no comments yet</Typography>
        ) : (
          <Timeline
            isLoading={isLoading}
            records={data}
            skeleton={skeleton}
            {...rest}
          >
            <TimelineGroup>
              <MyRecordTimelineItem />
            </TimelineGroup>
          </Timeline>
        )}
      </Card>
    </Box>
  );
};

type MyRecordTimelineProps = UseRecordEventsOptions &
  Omit<TimelineProps, "records" | "isLoading">;
