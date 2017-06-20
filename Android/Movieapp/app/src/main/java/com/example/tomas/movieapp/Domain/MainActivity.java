package com.example.tomas.movieapp.Domain;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import com.example.tomas.movieapp.Presentation.MovieDetail;
import com.example.tomas.movieapp.R;

import java.util.ArrayList;

/**
 * Created by Tomas on 20-6-2017.
 */

public class MainActivity extends AppCompatActivity implements ListView.OnItemClickListener{

    private ArrayList<Movie> mMovieArray = new ArrayList<Movie>();
    private ListView mMovieListView;
    private MovieAdapter mMovieAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movielist);

        Movie movie = new Movie();

        mMovieListView = (ListView) findViewById(R.id.MovieListView);

        mMovieAdapter = new MovieAdapter(this,mMovieArray);

        mMovieListView.setAdapter(mMovieAdapter);

        mMovieAdapter.notifyDataSetChanged();

        mMovieListView.setOnItemClickListener(this);



    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int i, long l) {

        Intent intent = new Intent(getApplicationContext(), MovieDetail.class);
        Movie movie = (Movie) this.mMovieArray.get(i);
        intent.putExtra("MovieItem",movie);
        startActivity(intent);

    }

}
