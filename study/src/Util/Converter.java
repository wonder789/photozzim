package Util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Converter
 */
@WebServlet("/Converter")
public class Converter extends GenericServlet {
	private static final long serialVersionUID = 1L;

	@Override
	public void service(ServletRequest request, ServletResponse response)
			throws ServletException, IOException {
		request.getRequestDispatcher("Convert.html").forward(request, response);
	}

}
