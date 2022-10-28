import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/system";
import { HawaAlert } from "./HawaAlert";
import { HawaButton } from "./HawaButton";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 10
};

export const DragDropImages = ({
  texts,
  files,
  setFiles,
  setDeletedFiles,
  maxFiles,
  accept,
  onAcceptedFiles,
  showPreview,
  onDeleteFile,
  onClearFiles,
  maxSize,
  errorMessages
}) =>
  // props
  {
    const [cmp, setCmp] = useState(0);
    const [max, setMax] = useState(0);
    //const [thumbs, setThumbs] = useState("");
    const theme = useTheme();
    const {
      getRootProps,
      getInputProps,
      fileRejections,
      acceptedFiles,
      isDragActive
    } = useDropzone({
      multiple: true,
      accept: accept,
      maxSize: maxSize,
      maxFiles: maxFiles,
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file, index) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });
    useEffect(
      () => () => {
        files?.forEach((file) => {
          URL.revokeObjectURL(file.preview);
        });
      },
      [files]
    );

    useEffect(() => {
      setFiles(acceptedFiles);
    }, [acceptedFiles, cmp]);

    onClearFiles = () => {
      acceptedFiles.length = 0;
      acceptedFiles.splice(0, acceptedFiles.length);
      setFiles([]);
    };

    useEffect(() => {
      if (maxSize > 0) {
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(maxSize) / Math.log(1024));

        setMax(
          parseFloat((maxSize / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i]
        );
      }
    }, [maxSize]);
    const errs = fileRejections.map((rej, i) => {
      return (
        <div key={i}>
          <div>{rej.file.name}</div>
          <div>{rej.errors[0].code}</div>
        </div>
      );
    });
    const thumbs = files?.map((file, index) => (
      <div style={{ position: "relative", margin: 10 }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
            setCmp(Math.random);
            onDeleteFile(file);
          }}
          type="button"
          class="text-gray-400 absolute left-0 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="defaultModal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            height: 100,
            width: 100,
            backgroundImage: `url(${file.preview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid black"
          }}
          key={file.name}
        />
      </div>
    ));

    console.log("error", fileRejections);

    return (
      <div
        // variant="drop-area"
        {...getRootProps({
          style: { backgroundColor: isDragActive && "white" }
        })}
        className="border-black border border-dashed rounded-xl flex flex-col justify-center"
      >
        <input {...getInputProps()} />
        <div className="text-center p-1">
          Click here or drop files here to upload
        </div>
        <div className="text-center p-1">Max file size is {max}</div>
        {acceptedFiles.length > 0 && (
          <HawaButton
            style={{ color: "black" }}
            onClick={(e) => {
              e.stopPropagation();
              onClearFiles(acceptedFiles);
            }}
          >
            Clear All
          </HawaButton>
        )}

        {thumbs && showPreview ? (
          <aside style={thumbsContainer}>{thumbs}</aside>
        ) : null}
        {fileRejections[0]?.errors[0]?.code === "too-many-files" ? (
          <HawaAlert text={texts.tooManyFiles} severity="error" />
        ) : fileRejections[0]?.errors[0]?.code === "file-too-large" ? (
          <HawaAlert text={texts.fileTooLarge} severity="error" />
        ) : (
          errs
        )}
        {}
      </div>
    );
  };
