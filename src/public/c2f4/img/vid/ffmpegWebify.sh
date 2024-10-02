#!/bin/bash

# Function to display usage information
usage() {
    echo "Usage: $0 <input_file> [output_directory]"
    echo "  <input_file>: The MKV file to be converted"
    echo "  [output_directory]: (Optional) The directory to store the converted files. Defaults to the input file name without extension."
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

# Output directory (either provided as second argument or derived from the input file name)
output_dir="${2:-$base_name}"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

echo "Converting '$input_file' and saving outputs to '$output_dir'..."

# Function for letterboxing (standard size with black bars)
scale_with_black_bars() {
    local target_width=$1
    local target_height=$2
    echo "scale=w=$target_width:h=$target_height:force_original_aspect_ratio=decrease,pad=$target_width:$target_height:(ow-iw)/2:(oh-ih)/2"
}

# 720p MP4 with black bars (1280x720)
ffmpeg -i "$input_file" -vf "$(scale_with_black_bars 1280 720)" -c:v libx264 -c:a aac -strict experimental "$output_dir/${base_name}_720p.mp4"

# 480p WebM with black bars (854x480)
ffmpeg -i "$input_file" -vf "$(scale_with_black_bars 854 480)" -c:v libvpx -c:a libvorbis "$output_dir/${base_name}_480p.webm"

# 360p Ogg with black bars (640x360)
ffmpeg -i "$input_file" -vf "$(scale_with_black_bars 640 360)" -c:v libtheora -c:a libvorbis "$output_dir/${base_name}_360p.ogg"

echo "Conversion completed."
