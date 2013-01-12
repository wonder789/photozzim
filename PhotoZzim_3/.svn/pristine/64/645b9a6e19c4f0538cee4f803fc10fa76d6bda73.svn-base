package controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import service.AlbumService;
import service.GroupService;
import service.PhotoService;
import service.ZzimService;
import sun.misc.BASE64Decoder;
import util.HashUtil;
import util.MetaDataExtractor;
import util.ThumbNail;
import vo.ActionResult;
import vo.Album;
import vo.Photo;
import vo.Zzim;
@Controller
@RequestMapping("/photo")
public class ImageController extends BaseController {
	private ServletContext servletContext;
	private ZzimService zzimService;
	private PhotoService photoService;
	private GroupService groupService;
	private AlbumService albumService;
	
	@Autowired
	public void setAlbumService(AlbumService albumService) {
		this.albumService = albumService;
	}
	@Autowired
	public void setZzimService(ZzimService zzimService) {
		this.zzimService = zzimService;
	}
	@Autowired
	public void setPhotoService(PhotoService photoService) {
		this.photoService = photoService;
	}

	@Autowired
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}
	
	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}
	
	
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	@ResponseBody
	public ActionResult upload(MultipartHttpServletRequest request) throws Exception{
		try{
		String	uploadPath = servletContext.getRealPath("/upload/photo/");
		List<MultipartFile> fileList = request.getFiles("file");
		String filename = null;
		File _file = null;
		for(MultipartFile file : fileList){
			filename = System.currentTimeMillis()  + ((int)(Math.random()*10000))
					+  file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
			_file =  new File(uploadPath + "/" + filename);
			file.transferTo(_file);
			isVaildateFile(
					request.getParameter("uid")
				 , request.getParameterValues("gid")
				 , uploadPath
				 , filename
				 , _file
				 , file.getOriginalFilename());
			
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	private void isVaildateFile(String uid, String[] gids,
			String uploadPath, String filename, File _file, String orgname)
			throws Exception{
	try{
		String _md5 = null;
		ThumbNail.createThumb(uploadPath , _file);
		System.out.println(gids);
		_md5 = HashUtil.calculateHash(MessageDigest.getInstance("MD5"), _file);
		//같은 사진이 올라오는경우 
		
		List<Zzim> zzimList = (ArrayList<Zzim>)zzimService.getZzimAll();
		//내가 아닌 다른사람이 같은사진을 올리는 경우 equals 에서 처리 
		if(zzimList.contains(new Zzim()
									.setpId(_md5)
					.setuId(uid))){	
			if(checkZzim(zzimList,new Zzim().setpId(_md5)
					.setuId(uid))){
			}
			zzimService.addZzim(new Zzim().setpId(_md5)
					  .setuId(uid));                                      
			photoService.changeRef(new Photo().setpId(_md5),1);
			//같은 사진을 두번 올릴 경우 
		}else if(checkZzim(zzimList,new Zzim().setpId(_md5)
					.setuId(uid))){
		}
		else if(gids != null){
			photoService.addPhoto(new Photo().setpId(_md5)
					                          .setpName(orgname)
					                           .setpPath(filename)
					                            .setpDate(MetaDataExtractor.getData(_file)));
			zzimService.addZzim(new Zzim().setpId(_md5)
				  .setuId(uid));
			for(String g : gids){
				groupService.groupPhotoAdd(filename, g);
			}
		}
		else{
			photoService.addPhoto(new Photo().setpId(_md5)
											.setpName(orgname)
											.setpPath(filename)
											.setpDate(MetaDataExtractor.getData(_file)));
			zzimService.addZzim(new Zzim().setpId(_md5)
										  .setuId(uid));
		}
	}catch(Exception e){
		e.printStackTrace();
	}
	}
	public Boolean checkZzim(List<Zzim> list,Zzim other){
		for(Zzim z : list){
			if(z.getpId().equals(other.getpId()) &&
					z.getuId().equals(other.getuId())){
				return true;
			}
		}
		return false;
	}
}
