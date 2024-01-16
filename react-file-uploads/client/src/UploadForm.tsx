/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const form = new FormData(event.currentTarget);
      const result = await fetch('/api/uploads', {
        method: 'POST',
        body: form,
      });
      if (!result.ok) throw new Error(`fetch Error: ${result.status}`);
      const image = await result.json();
      setImageFile(image);
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
          {imageFile && <img src={imageFile.url} />}
        </div>
      </div>
    </div>
  );
}
