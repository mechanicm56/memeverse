import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-4">
      <h1 className="text-5xl font-bold text-red-500">Oops! 404 Error</h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-500">
        Looks like you’ve wandered off the beaten path!
      </p>

      {/* Meme Image */}
      <div style={{ height: 300 }} className="mt-4">
        <div className="container-404">
          <div className="caveman">
            <div className="leg">
              <div className="foot">
                <div className="fingers"></div>
              </div>
            </div>
            <div className="leg">
              <div className="foot">
                <div className="fingers"></div>
              </div>
            </div>
            <div className="shape">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="head">
              <div className="eye">
                <div className="nose"></div>
              </div>
              <div className="mouth"></div>
            </div>
            <div className="arm-right">
              <div className="club"></div>
            </div>
          </div>
          <div className="caveman">
            <div className="leg">
              <div className="foot">
                <div className="fingers"></div>
              </div>
            </div>
            <div className="leg">
              <div className="foot">
                <div className="fingers"></div>
              </div>
            </div>
            <div className="shape">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="head">
              <div className="eye">
                <div className="nose"></div>
              </div>
              <div className="mouth"></div>
            </div>
            <div className="arm-right">
              <div className="club"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Funny Message */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-500">
        This is not the page you're looking for. But hey, it’s a great time to
        laugh!
      </p>

      {/* Link to Home */}
      <div className="mt-6">
        <Link className="text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300" href="/">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
