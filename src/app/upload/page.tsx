import Button from "@/components/Button";
import ImageDrop from "@/components/ImageDrop";

function Upload() {
  return (
    <div className="p-4">
      <h1>Upload Meme</h1>
      <br />
      <ImageDrop accept="image/gif" />
      <br />
      <Button>Generate With AI</Button>
    </div>
  );
}

export default Upload;
