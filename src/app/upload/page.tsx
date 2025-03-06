import { Metadata } from "next";
import UploadForm from "./upload.form";

export const metadata: Metadata = {
  title: "Upload | Memeverse",
  description: "Upload Meme",
};

function UploadPage() {
  return (
    <div className="p-4">
      <h1>Upload Meme</h1>
      <br />
      <UploadForm />
    </div>
  );
}

export default UploadPage;
