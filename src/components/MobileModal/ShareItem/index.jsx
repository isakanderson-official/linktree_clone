import { ChevronRightIcon } from '@heroicons/react/24/outline';

const ShareItem = ({ Icon, text, ...props }) => {
  return (
    <div
      {...props}
      className={
        'py-4 px-2 flex w-full justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg '
      }
    >
      <div className='flex gap-5 items-center'>
        <Icon className='h-5 w-5' />
        <p className='font-bold'>{text}</p>
      </div>
      <ChevronRightIcon className='h-5 w-5' />
    </div>
  );
};
export default ShareItem;
