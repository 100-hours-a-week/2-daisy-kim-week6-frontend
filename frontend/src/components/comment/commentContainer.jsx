import React, { useEffect, useState } from 'react';
import * as S from './style/commentContainerStyle';
import CommentInput from './input';
import CommentItem from './commentItem';
import CommentList from '../../utils/api/getComments';
import api from '../../utils/axios';

export default function CommentContainer() {
  const { comments, id, fetchComments, triggerUpdate } = CommentList();
  const [newComment, setNewComment] = useState('');
  const [isdisable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [commentId, setCommentId] = useState(0);

  const handleNewComment = (e) => setNewComment(e.target.value);
  function handleDisable() {
    if (newComment === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  async function postComment() {
    setLoading(true);
    try {
      const response = await api.post(`/board/${id}/comment`, {
        content: newComment,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setNewComment('');
      window.location.reload();
    }
  }
  async function updateComment() {
    setLoading(true);
    try {
      const response = await api.patch(`/board/${id}/comment/${commentId}`, {
        content: newComment,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setNewComment('');
    }
  }
  function editButton(comment, id) {
    setNewComment(comment);
    setCommentId(parseInt(id));
    setIsClicked(true);
  }

  async function deleteComment(id) {
    try {
      const response = await api.delete(`/board/${id}/comment/${parseInt(id)}`);
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
    } finally {
      window.location.reload();
    }
  }

  useEffect(() => {
    fetchComments();
  }, [id, loading]);

  useEffect(() => {
    handleDisable();
  }, [newComment]);

  return (
    <S.CommentWrapper>
      {isClicked ? (
        <CommentInput
          func={handleNewComment}
          isDisable={isdisable}
          submit={updateComment}
          newCommeent={newComment}
        />
      ) : (
        <CommentInput
          func={handleNewComment}
          isDisable={isdisable}
          submit={postComment}
          newCommeent={newComment}
        />
      )}
      <S.CommentList>
        {comments.map((comment) => (
          <CommentItem
            item={comment}
            key={comment.id}
            editFunction={() => editButton(comment.content, comment.id)}
            deleteFunction={() => deleteComment(comment.id)}
          />
        ))}
      </S.CommentList>
    </S.CommentWrapper>
  );
}
