package Models;

/**
 * Created by mhi on 10/03/17.
 */
public class Ponto {
    int id;
    private Rua rua1;
    private Rua rua2;

    public Rua getRua1() {
        return rua1;
    }

    public void setRua1(Rua rua1) {
        this.rua1 = rua1;
    }

    public Rua getRua2() {
        return rua2;
    }

    public void setRua2(Rua rua2) {
        this.rua2 = rua2;
    }
}
