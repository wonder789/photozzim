package controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.security.MessageDigest;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.AlbumService;
import service.PhotoService;
import sun.misc.BASE64Decoder;
import util.HashUtil;
import util.MetaDataExtractor;
import util.ThumbNail;
import vo.ActionResult;
import vo.Album;
import vo.Photo;

@Controller
@RequestMapping("/photo")
public class AlbumController extends BaseController {
	private ServletContext servletContext;
	private AlbumService albumService;
	private PhotoService photoService;
	
	@Autowired
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}

	@Autowired
	public void setAlbumService(AlbumService albumService) {
		this.albumService = albumService;
	}
	
	@Autowired
	public void setPhotoService(PhotoService photoService) {
		this.photoService = photoService;
	}

	@RequestMapping(value="/uploadAlbum",method=RequestMethod.POST)
	@ResponseBody
	public ActionResult uploadCanvas(int aId,String type,String title
						, String canvasData, String uId, String apData) throws Exception{
		String	uploadPath = servletContext.getRealPath("/upload/photo/");
		BASE64Decoder decoder = new BASE64Decoder();
		byte[]  imgBytes = decoder.decodeBuffer(canvasData.split("^data:image/(png|jpg|jpeg);base64,")[1]);
		BufferedImage bfi = ImageIO.read(new ByteArrayInputStream(imgBytes));    
        String  filename = System.currentTimeMillis()  + ((int)(Math.random()*10000)) + ".jpg" ;
        File _file =  new File(uploadPath + "/" + filename );
        ImageIO.write(bfi , "jpg", _file);
        bfi.flush();
        String _md5 = HashUtil.calculateHash(MessageDigest.getInstance("MD5"), _file);
		ThumbNail.createThumb(uploadPath , _file);
		_md5 = HashUtil.calculateHash(MessageDigest.getInstance("MD5"), _file);
		photoService.addPhoto(new Photo().setpId(_md5)
				.setpName(title + ".jpg")
				.setpPath(filename)
				.setpDate(MetaDataExtractor.getData(_file)));
		if(type.equals("add")){
			albumService.createAlbum(new Album().setuId(uId)
					.setTitle(title)
					.setaPid(_md5)
					.setaPs(Album.NO_ACCEPT)
					.setApData(apData));
		} else if (type.equals("modify")){
			String aPid = albumService.existApid(aId);
			albumService.updateAlbum(new Album().setaId(aId)
												.setApData(apData)
												.setaPid(_md5)
												.setTitle(title)
												.setaPs(Album.NO_ACCEPT));
			if(!(aPid.equals(null) || aPid.equals(""))){
				photoService.removeAlbum(aPid);
			}
		}
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}

	//해당 유저의 앨범 불러오기
	@RequestMapping("/album/loadUserAlbum")
	@ResponseBody
	public ActionResult loadUserAlbum(String uId) throws Exception {
		return new ActionResult().setStatus(ActionResult.SUCCESS).setData(albumService.loadUserAlbum(uId));
	}
	
	//친구 앨범 불러오기
	@RequestMapping("/album/loadFriendAlbum")
	@ResponseBody
	public ActionResult loadFriendAlbum(String uId) throws Exception {
		return new ActionResult().setStatus(ActionResult.SUCCESS)
								 .setData(albumService.loadFriendAlbum(uId));
	}
	
	//앨범 추가하기
	@RequestMapping("/album/createAlbum")
	@ResponseBody
	public ActionResult createAlbum(Album album) throws Exception {
		albumService.createAlbum(album);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//앨범 삭제하기 albumPhotoExist removeAlbumAllPhoto removeAlbum
	@RequestMapping("/album/removeAlbum")
	@ResponseBody
	public ActionResult removeAlbum(int aId) throws Exception {
		albumService.removeAlbum(aId);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//앨범 사진 추가하기
	@RequestMapping("/album/updateAlbumPhoto")
	@ResponseBody
	public ActionResult updateAlbumPhoto(int aId, String pId) throws Exception {
		albumService.updateAlbumPhoto(aId, pId);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
	//앨범 공유하기
	@RequestMapping("/album/updateAps")
	@ResponseBody
	public ActionResult updateAps(Album album) throws Exception{
		albumService.updateAps(album);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	
}
