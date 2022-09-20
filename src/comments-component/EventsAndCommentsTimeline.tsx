import {
  Timeline,
  TimelineGroup,
  TimelineProps,
  useRecordEvents,
  UseRecordEventsOptions,
} from "@react-admin/ra-audit-log";
import { Box, Card, Typography, TextField, Button, Stack } from "@mui/material";
import { EventsAndCommentsTimelineItem } from "./EventsAndCommentsTimelineItem";
import { useAddComment } from "./useAddComment";
import React from "react";
import { useRefresh } from "react-admin";

export const EventsAndCommentsTimeline = (
  props: EventsAndCommentsTimelineProps
) => {
  const { data, isLoading } = useRecordEvents(props);
  const { page, perPage, sort, order, record, resource, skeleton, ...rest } =
    props;
  const refresh = useRefresh();
  const [commentBody, setCommentBody] = React.useState("");
  const addComment = useAddComment({
    record,
    resource,
    mutationOptions: {
      onSuccess: () => {
        setCommentBody("");
        refresh();
      },
    },
  });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addComment({ body: commentBody });
    return false;
  };

  return (
    <Box sx={{ ml: 2, width: 350 }}>
      <Card sx={{ p: 2 }}>
        <Box sx={{ mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <Stack>
              <TextField
                label="Write a new comment"
                value={commentBody}
                onChange={(event) => setCommentBody(event.target.value)}
                multiline
                rows={3}
              />
              <Button type="submit" variant="contained">
                Submit comment
              </Button>
            </Stack>
          </form>
        </Box>
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
              <EventsAndCommentsTimelineItem />
            </TimelineGroup>
          </Timeline>
        )}
      </Card>
    </Box>
  );
};

type EventsAndCommentsTimelineProps = UseRecordEventsOptions &
  Omit<TimelineProps, "records" | "isLoading">;
