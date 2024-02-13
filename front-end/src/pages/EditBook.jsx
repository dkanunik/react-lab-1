import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import {useSnackbar} from "notistack";

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(false);
                setLoading(false);
            }).catch((e) => {
                setLoading(false);
                alert('An error happened. Check console.');
                console.log(e);
            });
    }, []);

    const handleSaveBookEditing = () => {
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book has been edited successfully',  {variant: 'success'});
                navigate('/');
            })
            .catch((e) => {
                setLoading(false);
                enqueueSnackbar('An error happened',  {variant: 'error'});
                console.log(e);
            });
    }

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Edit Book</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        title='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input
                        title='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input
                        title='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBookEditing}>
                    Save changes
                </button>
            </div>
        </div>
    )
}

export default EditBook;
