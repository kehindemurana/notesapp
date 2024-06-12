import { useState } from 'react';
import TagInput from '../../components/input/TagInput';
import { MdClose, MdEditNote } from 'react-icons/md';

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  // Add Note
  const addNewNote = async () => {};
  // Edit Note
  const editNote = async () => {};
  const handleAddNote = () => {
    if (!title) {
      setError('pls enter the title');
      return;
    }
    if (!content) {
      setError('pls enter the content');
      return;
    }
    setError('');

    if (type === 'edit') {
      editNote();
    } else {
      addNewNote();
    }
  };
  return (
    <div className='relative'>
      <button
        className='w-10 h-10 rounded-full flex items-center absolute -top-3 -right-3 hover:bg-slate-50'
        onClick={onClose}
      >
        <MdClose className='text-xl text-slate-400' />
      </button>

      <div className='flex flex-col gap-2'>
        <label className='input-label'>TITLE</label>
        <input
          type='text'
          className='text-2xl outline-none text-slate-500'
          placeholder='Go to gym at 5'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>CONTENT</label>
        <textarea
          type='text'
          placeholder='content'
          rows={10}
          className='p-2 text-sm rounded outline-none text-slate-950 bg-slate-100 '
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className='mt-3'>
        <label className='input-label'>TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
      <button
        className='p-3 mt-5 font-medium btn-primary'
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
