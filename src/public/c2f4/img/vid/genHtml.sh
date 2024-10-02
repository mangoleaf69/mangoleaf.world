#!/bin/bash

# Function to display usage information
usage() {
    echo "Usage: $0 <input_file>"
    echo "  <input_file>: The MKV file that was converted"
    exit 1
}

# Check for at least one argument (input file)
if [ "$#" -lt 1 ]; then
    usage
fi

# Input file and check if it exists
input_file="$1"
if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' not found!"
    exit 1
fi

# Extract the file name without the extension
base_name=$(basename "$input_file" .mkv)

# Define the output directory
output_dir="."
video_dir="$output_dir/$base_name"

# Ensure the video directory exists
mkdir -p "$video_dir"

# Create HTML file in the top-level /vid directory
html_file="$output_dir/$base_name.html"

# Start generating the HTML content
cat <<EOL > "$html_file"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Video Viewer - $base_name</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
    <style>
    </style>
</head>
<body>

    <h1>Video Viewer: $base_name</h1>

    <!-- HTML5 Video Player -->
    <video width="640" height="360" controls>
        <source src="./$base_name/${base_name}_720p.mp4" type="video/mp4">
        <source src="./$base_name/${base_name}_480p.webm" type="video/webm">
        <source src="./$base_name/${base_name}_360p.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <!-- Buttons to download each version -->
    <div>
        <button><a href="./$input_file" download>Download Original (MKV)</a></button>
        <button><a href="./$base_name/${base_name}_720p.mp4" download>Download 720p (MP4)</a></button>
        <button><a href="./$base_name/${base_name}_480p.webm" download>Download 480p (WebM)</a></button>
        <button><a href="./$base_name/${base_name}_360p.ogg" download>Download 360p (Ogg)</a></button>
    </div>

    <!-- Absolute path version (commented out) -->
    <!--
    <video width="640" height="360" controls>
        <source src="/img/vid/$base_name/${base_name}_720p.mp4" type="video/mp4">
        <source src="/img/vid/$base_name/${base_name}_480p.webm" type="video/webm">
        <source src="/img/vid/$base_name/${base_name}_360p.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <div>
        <button><a href="/img/vid/$input_file" download>Download Original (MKV)</a></button>
        <button><a href="/img/vid/$base_name/${base_name}_720p.mp4" download>Download 720p (MP4)</a></button>
        <button><a href="/img/vid/$base_name/${base_name}_480p.webm" download>Download 480p (WebM)</a></button>
        <button><a href="/img/vid/$base_name/${base_name}_360p.ogg" download>Download 360p (Ogg)</a></button>
    </div>
    -->

</body>
</html>
EOL

echo "HTML viewer generated at: $html_file"
