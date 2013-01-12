package util;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;
import com.mortennobel.imagescaling.AdvancedResizeOp;
import com.mortennobel.imagescaling.ResampleOp;


public class ThumbNail {
	private static final int THUMB_SIZE = 110;
	public static void createThumb(String uploadPath,File file) throws Exception{
		BufferedImage originImage = ImageIO.read(file);
		ResampleOp  resampleOp = new ResampleOp(THUMB_SIZE,THUMB_SIZE);
		resampleOp.setUnsharpenMask(AdvancedResizeOp.UnsharpenMask.Soft);//필터적용여부(Normal) 
		BufferedImage rescaledTh = resampleOp.filter(originImage, null);
		ImageIO.write(rescaledTh, file.getName().substring(file.getName().lastIndexOf(".")+1), 
					new File(uploadPath + "/" + file.getName().substring(0,file.getName().lastIndexOf(".")) + "_thumb"
												+ file.getName().substring(file.getName().lastIndexOf("."))));
	}

}
