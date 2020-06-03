// Next
import Head from 'next/head';

// CSS
import '../styles.global.scss';
import styles from './index.scss';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';

// Constants
import { HEADER, PHOTO_ALBUM, UPLOAD_PHOTO } from '../../constants/general';

const PhotoAlbum = () => {
  const triggerUpload = async () => {
    document.getElementById('upload-photo').click();
  };

  const uploadImage = async () => {
    // const res: any = await fetch('/api/fileUploader');
    // console.log(res);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <NavigationBar title={PHOTO_ALBUM} />
        <Header />
        <div className={styles.uploadButton}>
          <>
            <input
              type="file"
              id="upload-photo"
              hidden
              onChange={() => {
                uploadImage();
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                triggerUpload();
              }}
            >
              {UPLOAD_PHOTO}
            </Button>
          </>
        </div>

        <div className={styles.photoAlbum}>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://assets.vogue.com/photos/5ec53a3097ab27d95ca3c3da/master/pass/LoganColephotographynBranch&Cole-3840.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://www.phillymag.com/wp-content/uploads/sites/3/2019/03/monet-malatino-wedding-thumb.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://www.brides.com/thmb/NK1qCS-2DC9YyyELLRWtF0AsK5k=/600x600/filters:no_upscale():max_bytes(150000):strip_icc()/alex-and-david-wedding-01-24dd434039744109aca7f938f0a167d3.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/10/litsa-pappas-wedding-a.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F36%2F2018%2F12%2F18231632%2F2019-wedding-trends-maria-lamb-harry-meghan-floral-arches-1218.jpeg&q=85"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://www.phillymag.com/wp-content/uploads/sites/3/2020/05/deepika.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://cdn.theatlantic.com/thumbor/LZ8U8L-jUrgbhcBy9u3ter6Wgb0=/5x552:3763x2510/960x500/media/img/mt/2020/02/shutterstock_395528119/original.jpg"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/04/0/0/couple-wedding-iStock.jpg?ve=1&tl=1"
            ></img>
          </div>
          <div className={styles.photoAlbumContainer}>
            <img
              className={styles.photo}
              src="https://longwoodvenues.com/wp-content/uploads/2017/04/Longwood_NewportBeach_Beach_03-746x496.jpg"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
};
export default PhotoAlbum;
