import img1 from './assets/image1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Welcome to My Static Webpage</h1>
        <p>This is a simple React static page with some images.</p>
      </header>

      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{ width: '300px', marginBottom: '20px', textAlign: 'center' }}
        >
          <img
            src={img1}
            alt="Image 1"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p>Beautiful Landscape</p>
        </div>

        <div
          style={{ width: '300px', marginBottom: '20px', textAlign: 'center' }}
        >
          <img
            src={img2}
            alt="Image 2"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p>City Lights</p>
        </div>

        <div
          style={{ width: '300px', marginBottom: '20px', textAlign: 'center' }}
        >
          <img
            src={img3}
            alt="Image 3"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p>Nature View</p>
        </div>
      </section>

      <p>
        This is a simple static webpage built with React. It showcases how to
        use images in a React application. You can customize this page further
        by adding more content, styles, or components.
        <br />
        You can also explore more about React and its features by visiting the
        official documentation at{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
        .
      </p>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#777' }}>
        <p>© 2025 My Static React Page</p>
      </footer>
    </div>
  );
};

export default App;
