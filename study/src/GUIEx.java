import java.awt.*;
import java.util.*;
import java.awt.event.*;
public class GUIEx extends Frame{
	Timer t;
	Color c ;
	Random ran ;
	final int FRAME_WIDTH = 400;
	final int FRAME_HEIGHT = 400;
	final long TIMER_DELAY = 14 * 1000;
	public static boolean isTimerPaint = false;
	public GUIEx() {
		super("gui exam");
		ran = new Random();
		this.setSize(FRAME_WIDTH,FRAME_HEIGHT);
		this.addWindowListener(new WindowAdapter(){
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
		this.setVisible(true);

		 t = new Timer();
		t.schedule(new testTask(this), 0,TIMER_DELAY);
	}
	@Override
	public void paint(Graphics g) {
		if(isTimerPaint==true){	
		    c = new Color(ran.nextInt(255),ran.nextInt(255),ran.nextInt(255));
			g.setColor(c);
			g.fillOval(50,50,20,20);
			isTimerPaint=false;
		}else if(t!=null && isTimerPaint==false){
			g.setColor(c);
			g.fillOval(50, 50, 30, 20);
		}
	}
	public static void main(String[] args) {
		new GUIEx();
	}
}
class testTask extends TimerTask{
	Frame f;
	public testTask(Frame f) {
		this.f = f;

	}
	@Override
	public void run() {
		GUIEx.isTimerPaint = true;
		f.repaint();
	}

}