const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value);
    }, 1);
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
  },
  formatEUA() {},
};

const PhotosUpload = {
  uploadLimit: 6,
  handleFileInput(event) {
    const { files: fileList } = input;
    const { uploadLimit } = PhotosUpload;

    if (fileList.length > uploadLimit) {
      alert(`Envie no maximo ${uploadLimit} arquivos`);
      event.preventDefault();
      return;
    }
  },
};
