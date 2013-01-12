package controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.PhotoService;
import vo.ActionResult;
import vo.Photo;
import vo.Zzim;
@Controller
@RequestMapping("/photo")
public class PhotoController extends BaseController{
	
	private PhotoService photoService;
	@Autowired
	public void setPhotoService(PhotoService photoService) {
		this.photoService = photoService;
	}
//	일별 포토리스트 
	//전체 포토리스트
	@RequestMapping(value="/loadSpread",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult loadSpread(String uId, String pPath, int nailNum) throws Exception{
		int startNum = 0;
		if(!pPath.equals(""))
			startNum = photoService.loadSpreadNum(uId, pPath);
		return new ActionResult().setStatus(ActionResult.SUCCESS).setData(photoService.loadSpread(uId,startNum,nailNum));
	}
	
	
	@RequestMapping(value="/loadDay",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult loadDay(String uId, String pDate, int nailNum) throws Exception{
		int startNum = 0;
		if(!pDate.equals(""))
			startNum = photoService.loadDayNum(uId, pDate);
		List<String> dateList = (List<String>)photoService.loadDay(uId, startNum, nailNum);
		List<List<Map<String,String>>> photoList = new ArrayList<List<Map<String,String>>>();
		for(String date : dateList){
			photoList.add((List<Map<String, String>>)photoService.getDayPhoto(date+"%", uId));
		}
		return new ActionResult().setData(photoList).setStatus(ActionResult.SUCCESS);
	}
	
//	스크롤
	@RequestMapping(value="/loadDetail",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult loadDetail(Photo photo,String uId, int nailNum) throws Exception{
		int startNum ;
		if(photo.getpPath() == null){
			startNum = 0;
			nailNum = 0;
		}else if (photo.getpPath().equals("") ){
			startNum = 0;
		}else{
			startNum =photoService.loadDetailNum(uId, photo.getpDate(), photo.getpPath());
		}
		
		return new ActionResult()
				.setData(photoService.loadDetail(photo, 
					startNum,uId, nailNum))
						.setStatus(ActionResult.SUCCESS);
	}	
	
//	공유 여부 변경 
	@RequestMapping(value="/changeZps",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult changeZps(String uid,String pPath) throws Exception{
		photoService.changeZps(uid, pPath);
		return new ActionResult().setStatus(ActionResult.SUCCESS);
	}
	//유저별 포토 목록 스크롤까지
	@RequestMapping(value="/loadUserPhoto",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult loadUserPhoto(String uId, String pPath, int nailNum) throws Exception{
		int startNum = 0;
		if(!pPath.equals(""))
			startNum = photoService.loadUserPhotoNum(uId, pPath);
		return new ActionResult().setStatus(ActionResult.SUCCESS).setData(photoService.loadUserPhoto(uId, startNum, nailNum));
	}
	
	@RequestMapping(value="/loadMyPhoto",method=RequestMethod.GET)
	@ResponseBody
	public ActionResult loadMyPhoto(Zzim zzim) throws Exception{
		return new ActionResult().setStatus(ActionResult.SUCCESS).setData(photoService.loadMyPhoto(zzim));
	}
}
