import { MdAdd } from 'react-icons/md';
import NoteCard from '../../components/Cards/NoteCard';
import Navbar from '../../components/Navbar/Navbar';
import AddEditNotes from './AddEditNotes';
import { useState } from 'react';
import Modal from 'react-modal';

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard
            title='Meeting on 7th April'
            date='3rd April 2024'
            content='Meeting on 7th April'
            tags='#Meeting'
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className='absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-blue-600 right-10 buttom-10'
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: 'add', data: null });
        }}
      >
        <MdAdd className='text-[32px] text-white' />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        }}
        contentLabel=''
        className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll'
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: 'add', data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
