package util;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.drew.imaging.ImageMetadataReader;
import com.drew.imaging.ImageProcessingException;
import com.drew.metadata.Directory;
import com.drew.metadata.Metadata;
import com.drew.metadata.TagDescriptor;
import com.drew.metadata.exif.ExifIFD0Directory;
import com.drew.metadata.exif.ExifSubIFDDirectory;

public class MetaDataExtractor {

	public static String getData(File file) throws ImageProcessingException, IOException {
		if(file.getName().toLowerCase().endsWith(".jpg")||file.getName().toLowerCase().endsWith(".jpeg")||
				file.getName().toLowerCase().endsWith(".tiff")||file.getName().toLowerCase().endsWith(".psd")){
			Metadata metadata = ImageMetadataReader.readMetadata(file);
			Date date = null;
			if(metadata.getDirectory(ExifSubIFDDirectory.class)!=null){
				ExifSubIFDDirectory directory = metadata.getDirectory(ExifSubIFDDirectory.class);
				 date = directory.getDate(ExifSubIFDDirectory.TAG_DATETIME_ORIGINAL);
				if(date==null)
					return null;
			}else if(metadata.getDirectory(ExifIFD0Directory.class)!=null){
				ExifIFD0Directory directory = metadata.getDirectory(ExifIFD0Directory.class);
				date =directory.getDate(ExifIFD0Directory.TAG_DATETIME);
				if(date==null)
					return null;
			}else {
				return null;
			}
			return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
		}
		return null;
		
	}
}
