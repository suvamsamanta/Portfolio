function DownloadFile() {
    const downloadLink = document.createElement("a");
    downloadLink.href = '#';
    downloadLink.download = 'download.png';
    downloadLink.click();
}
