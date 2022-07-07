import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postSlice';

const PostsList = () => {
    const dispatch = useDispatch();
    const { list, status } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            {list.map(item => (
                <p key={item.id} style={{ borderBottom: 'solid 1px black' }}>
                    {item.title}
                </p>
            ))}
        </div>
    );
};

export default PostsList;
