import React, { useState } from 'react';
import api from '../../Api';

const formDefaultState = {
    image: '',
    title: '',
    text: '',
    tags: '',
};

const FormPage = () => {
    const [form, setForm] = useState(formDefaultState);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    const handleCancel = () => {
        setForm(formDefaultState);
    }

    const handleSubmit = () => {
        const splittedTags = form.tags.split(',');
        const postData = {
            ...form,
            tags: splittedTags,
        }

        api.createPost(postData);
    }

    return (
        <div>
            <input name="image" value={form.url} type="text" placeholder="url картинки поста" onChange={handleChange} /> <br />
            <input name="title" value={form.title} type="text" placeholder="заголовок поста" onChange={handleChange} /> <br />
            <textarea name="text" value={form.text} placeholder="текст поста" onChange={handleChange} /> <br />
            <input name="tags" value={form.tags} type="text" placeholder="введите тэги через запятую" onChange={handleChange} /> <br />

            <button onClick={handleCancel}>Отмена</button>
            <button onClick={handleSubmit}>Создать</button>
        </div>
    )
}

export default FormPage;