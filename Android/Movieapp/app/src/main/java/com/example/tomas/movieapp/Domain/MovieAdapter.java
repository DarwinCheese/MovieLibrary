package com.example.tomas.movieapp.Domain;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.tomas.movieapp.R;

import java.util.ArrayList;

/**
 * Created by Tomas on 19-6-2017.
 */

public class MovieAdapter extends ArrayAdapter<Movie> {
    private Context context;

    public MovieAdapter(Context context, ArrayList<Movie> Movies) {
        super(context, 0, Movies);

        this.context = context;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

       Movie movie = getMovie(position);

        if( convertView == null ) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.movielistrow, parent, false);
        }

        // Display album name in list
        TextView albumName = (TextView) convertView.findViewById(R.id.NameTextView);
        albumName.setText(movie.getMovietitle());




        return convertView;
    }
}
