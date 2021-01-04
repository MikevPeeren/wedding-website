import Image from 'next/image';

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap mx-2 my-14 overflow-hidden">
      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-23.jpg"></img>
      </div>

      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-12.jpg"></img>
      </div>

      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-08.jpg"></img>
      </div>

      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-17.jpg"></img>
      </div>

      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-05.jpg"></img>
      </div>

      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <img className="w-full" src="/static/monika-mike-15.jpg"></img>
      </div>
    </div>
  );
};

export default ImageGallery;
