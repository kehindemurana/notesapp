import { MdCreate, MdDelete } from 'react-icons/md';
import { MdOutlinePushPin } from 'react-icons/md';
const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className='p-4 transition-all ease-in-out bg-white border rounded hover:shadow-xl'>
      <div className='flex items-center justify-between'>
        <div>
          <h6 className='text-sm font-medium'>{title}</h6>
          <span className='text-sm text-slate-500'>{date}</span>
        </div>
        <MdOutlinePushPin onClick={onPinNote} />
      </div>
      <p className=''>{content?.slice(0, 60)}</p>
      <div className='flex items-center justify-between'>
        <div className='text-sm text-slate-500'>{tags}</div>
        <div className='flex items-center gap-4'>
          <MdCreate
            className='icon-btn hover:text-green-600'
            onClick={onEdit}
          />
          <MdDelete
            className='icon-btn hover:text-red-500'
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
