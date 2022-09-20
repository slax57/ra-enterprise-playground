import { EventRecord, EventAuthor } from "@react-admin/ra-audit-log";
import { useCallback } from "react";
import {
  useGetIdentity,
  useRecordContext,
  useResourceContext,
  RaRecord,
  useCreate,
  UseCreateMutateParams,
} from "react-admin";
import { MutateOptions } from "react-query";
import { Comment } from "./types";

export const useAddComment = <
  TReturnPromise extends boolean = boolean,
  MutationError = unknown
>(
  options: UseAddCommentOptions<TReturnPromise, MutationError> = {}
): UseAddCommentHookValue<TReturnPromise> => {
  const record = useRecordContext(options);
  const resource = useResourceContext(options);
  const { identity } = useGetIdentity();
  const {
    eventResource = "events",
    commentEventAction = "comment",
    mutationOptions,
  } = options;
  const [create] = useCreate<EventRecord, MutationError>();

  const addComment: UseAddCommentHookValue = useCallback(
    (data) => {
      return create(
        eventResource,
        {
          data: {
            date: new Date(),
            author: identity,
            resource,
            action: commentEventAction,
            payload: {
              data: { id: record?.id },
              ...data,
            },
          },
        },
        mutationOptions
      );
    },
    [
      commentEventAction,
      create,
      eventResource,
      identity,
      mutationOptions,
      record?.id,
      resource,
    ]
  );

  return addComment;
};

interface UseAddCommentOptions<
  TReturnPromise extends boolean = boolean,
  MutationError = unknown
> {
  record?: RaRecord;
  resource?: string;
  eventResource?: string;
  commentEventAction?: string;
  mutationOptions?: MutateOptions<
    EventRecord,
    MutationError,
    Partial<UseCreateMutateParams<Comment & RaRecord>>,
    unknown
  > & { returnPromise?: TReturnPromise };
}

type UseAddCommentHookValue<TReturnPromise extends boolean = boolean> = (
  data?: Comment
) => Promise<TReturnPromise extends true ? EventRecord : void>;
