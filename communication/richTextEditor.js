let savedSelection = null;

// Save the current text selection
function saveSelection() {
  const sel = window.getSelection();
  if (sel.rangeCount > 0) {
    savedSelection = sel.getRangeAt(0);
  }
}

// Restore previously saved selection
function restoreSelection() {
  if (savedSelection) {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(savedSelection);
  }
}

// Execute a command while preserving the selection
function exec(command, value = null) {
  restoreSelection();
  document.execCommand(command, false, value);
}

// Insert link
function insertLink() {
  saveSelection();
  const url = prompt("Enter the URL:");
  if (url) {
    exec("createLink", url);
  }
}

// Insert image
function insertImage() {
  saveSelection();
  const imageUrl = prompt("Enter the image URL:");
  if (imageUrl) {
    exec("insertImage", imageUrl);
  }
}

// Toggle preview view
function togglePreview() {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  if (preview.style.display === "none") {
    preview.innerHTML = editor.innerHTML;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
}

// Export HTML content
function exportHTML() {
  const content = document.getElementById("editor").innerHTML;
  const blob = new Blob([content], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "church-article.html";
  a.click();
}

// Default formatting on load
window.onload = function () {
  const editor = document.getElementById('editor');
  document.execCommand('fontName', false, 'Times New Roman');
  document.execCommand('fontSize', false, '12');

  // Save selection on mouseup/keyup in editor
  editor.addEventListener('mouseup', saveSelection);
  editor.addEventListener('keyup', saveSelection);
  editor.addEventListener('blur', saveSelection);
};

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const isDropdown = event.target.closest('.dropdown-content');
  const isButton = event.target.closest('button');
  if (!isDropdown && !isButton) closeAllDropdowns();
});

function toggleDropdown(button, dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  // Save selection before interacting with dropdown
  saveSelection();

  // Store original parent if not done
  if (!dropdown.dataset.originalParentId) {
    dropdown.dataset.originalParentId = dropdown.parentNode.id || `parent-${dropdownId}`;
    dropdown.parentNode.id = dropdown.dataset.originalParentId;
  }

  const alreadyVisible = dropdown.style.display === 'block';
  closeAllDropdowns();

  if (!alreadyVisible) {
    const rect = button.getBoundingClientRect();
    document.body.appendChild(dropdown);
    dropdown.style.position = 'absolute';
    dropdown.style.left = `${rect.left}px`;
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.style.display = 'block';
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-content').forEach(d => {
    d.style.display = 'none';
    if (d.dataset.originalParentId) {
      const originalParent = document.getElementById(d.dataset.originalParentId);
      if (originalParent && !originalParent.contains(d)) {
        originalParent.appendChild(d);
      }
    }
  });
}



  function exec(command, value = null) {
    document.execCommand(command, false, value);
  }

  // Open the Image Modal
function insertImage() {
  document.getElementById("imageModal").style.display = "block";
}

// Close and Reset the Image Modal
function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";

  // Clear form inputs
  document.getElementById("imgUrlInput").value = "";
  document.getElementById("imgFileInput").value = "";
  document.getElementById("imgAltInput").value = "";
  document.getElementById("imgWidthInput").value = "";
  document.getElementById("imgHeightInput").value = "";
  document.getElementById("imgAlignInput").value = "";
}

// Handle Apply/Insert Button from Modal
function applyImageInsert() {
  const url = document.getElementById("imgUrlInput").value.trim();
  const fileInput = document.getElementById("imgFileInput");
  const alt = document.getElementById("imgAltInput").value.trim();
  const width = document.getElementById("imgWidthInput").value.trim();
  const height = document.getElementById("imgHeightInput").value.trim();
  const align = document.getElementById("imgAlignInput").value;

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      insertImageToEditor(e.target.result, alt, width, height, align);
      closeImageModal();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else if (url) {
    insertImageToEditor(url, alt, width, height, align);
    closeImageModal();
  } else {
    alert("Please provide an image URL or upload a file.");
  }
}

// Insert the Image into the Editor with Optional Attributes
function insertImageToEditor(src, alt, width, height, align) {
  let attributes = [`src="${src}"`];

  if (alt) attributes.push(`alt="${alt}"`);
  if (width) attributes.push(`width="${width}"`);
  if (height) attributes.push(`height="${height}"`);

  let style = "";
  if (align === "center") {
    style = "display: block; margin: 0 auto;";
  } else if (align === "left" || align === "right") {
    style = `float: ${align};`;
  }

  if (style) {
    attributes.push(`style="${style}"`);
  }

  const imgTag = `<img ${attributes.join(" ")}>`;
  exec("insertHTML", imgTag);
}

// Utility to Execute Commands on the Editor
function exec(command, value = null) {
  document.execCommand(command, false, value);
}



  function insertTable() {
  document.getElementById('tableModal').style.display = 'flex';
}

function openTableModal() {
  document.getElementById("tableModal").style.display = "flex";
  showTab("generalTab");
}

function closeTableModal() {
  document.getElementById("tableModal").style.display = "none";
}

function confirmInsertTable() {
  const rows = parseInt(document.getElementById("tableRows").value, 10);
  const cols = parseInt(document.getElementById("tableCols").value, 10);
  const width = document.getElementById("tableWidth").value;
  const height = document.getElementById("tableHeight").value;
  const spacing = document.getElementById("cellSpacing").value;
  const padding = document.getElementById("cellPadding").value;
  const borderWidth = document.getElementById("borderWidth").value;
  const borderStyle = document.getElementById("borderStyle").value;
  const borderColor = document.getElementById("borderColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const align = document.getElementById("tableAlign").value;
  const includeCaption = document.getElementById("includeCaption").checked;

  if (rows > 0 && cols > 0) {
    let style = `border-collapse: collapse;`;
    if (width) style += ` width:${width};`;
    if (height) style += ` height:${height};`;
    style += ` border:${borderWidth}px ${borderStyle} ${borderColor}; background-color:${bgColor};`;

    let table = `<table cellspacing="${spacing}" cellpadding="${padding}" style="${style}"${align ? ` align="${align}"` : ''}>`;
    
    if (includeCaption) {
      table += `<caption>Table Caption</caption>`;
    }

    for (let i = 0; i < rows; i++) {
      table += "<tr>";
      for (let j = 0; j < cols; j++) {
        table += `<td>Cell</td>`;
      }
      table += "</tr>";
    }
    table += "</table>";
    exec("insertHTML", table);
  }

  closeTableModal();
}

function showTab(tabId) {
  document.getElementById("generalTab").style.display = "none";
  document.getElementById("advancedTab").style.display = "none";

  document.getElementById("generalTabBtn").style.background = "#fff";
  document.getElementById("advancedTabBtn").style.background = "#fff";

  document.getElementById(tabId).style.display = "block";
  document.getElementById(tabId + "Btn").style.background = "#eee";
}








const editor = document.getElementById("editor");

editor.addEventListener("input", updateStats);

function updateStats() {
  const editor = document.getElementById("editor");
  const text = editor.innerText || "";
  const html = editor.innerHTML || "";

  const words = text.trim().split(/\s+/).filter(Boolean);
  const paragraphs = html.match(/<p[\s\S]*?<\/p>|<div[\s\S]*?<\/div>|<br\s*\/?>/gi) || [];

  const letters = text.match(/[a-zA-Z]/g) || [];
  const numbers = text.match(/[0-9]/g) || [];
  const punctuations = text.match(/[.,!?;:'"()[\]{}\-]/g) || [];

  document.getElementById("wordCount").textContent = words.length;
  document.getElementById("paraCount").textContent = paragraphs.length;
  document.getElementById("letterCount").textContent = letters.length;
  document.getElementById("numberCount").textContent = numbers.length;
  document.getElementById("charCount").textContent = punctuations.length;
}

// Initial stats on load
updateStats();