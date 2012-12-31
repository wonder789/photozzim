package controller;

import java.io.File;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {
	@Autowired
	ServletContext servletContext;
	
	@RequestMapping(value="upload/upload",method=RequestMethod.GET)
	public String uploadForm() throws Exception{
		return "upload/uploadForm";
	}
	@RequestMapping(value="upload/upload",method=RequestMethod.POST)
	public String upload(String title,MultipartFile file1
			,MultipartFile file2,Model model) throws Exception{
		String repoPath = servletContext.getRealPath("/"); 
		File newFile1 = new File(repoPath + "upload/" + file1.getOriginalFilename());
		File newFile2 = new File(repoPath + "upload/" + file2.getOriginalFilename());
		file1.transferTo(newFile1);
		file2.transferTo(newFile2);
		model.addAttribute("title",title);
		model.addAttribute("file1",file1);
		model.addAttribute("file2",file2);
		return "upload/upload";
	}
}
