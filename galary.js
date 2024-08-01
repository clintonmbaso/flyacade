function downloadImage(url) {
    // Create an anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function saveImage(url) {
    // Open IndexedDB and store image
    if (!window.indexedDB) {
        alert('IndexedDB not supported.');
        return;
    }

    const request = indexedDB.open('photoGallery', 1);

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('images')) {
            db.createObjectStore('images', { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['images'], 'readwrite');
        const store = transaction.objectStore('images');

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = function() {
                    store.add({ id: url, data: reader.result });
                };
                reader.readAsDataURL(blob);
            });

        transaction.oncomplete = function() {
            alert('Image saved to IndexedDB.');
        };

        transaction.onerror = function() {
            alert('Error saving image.');
        };
    };

    request.onerror = function() {
        alert('Database error.');
    };
}