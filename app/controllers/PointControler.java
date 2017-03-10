package controllers;

import play.mvc.*;

/**
 * Created by mhi on 09/12/16.
 */
public class PointControler extends Controller{
    public static Result changes(){
        return ok("Salvo");
    }
    public static Result popula(){
        return ok("Removido");
    }
}
